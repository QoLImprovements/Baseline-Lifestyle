/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands",
  "id": "cofid-old-11-158",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Baby cereals, rice-based",
  "nutritionPerBasis": {
    "calcium_mg": 870.0,
    "carbs_g": 79.6,
    "energy_kcal": 386.0,
    "fat_g": 4.8,
    "fibre_g": 0.0,
    "folate_ug": 82.0,
    "iron_mg": 20.0,
    "magnesium_mg": 72.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 370.0,
    "potassium_mg": 340.0,
    "protein_g": 10.9,
    "salt_g": 0.0875,
    "sat_fat_g": 0.0,
    "sodium_mg": 35.0,
    "sugar_g": 6.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 100.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-158",
  "state": "Unspecified",
  "subcategory": "AK",
  "tags": [
    "ak",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
