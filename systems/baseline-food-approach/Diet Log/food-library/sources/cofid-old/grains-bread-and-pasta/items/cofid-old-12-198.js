/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Ice cream roll with raspberry sauce and sponge; 10 samples, 2 brands",
  "id": "cofid-old-12-198",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Arctic roll",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 33.3,
    "energy_kcal": 200.0,
    "fat_g": 6.6,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.7,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 140.0,
    "protein_g": 4.1,
    "salt_g": 0.375,
    "sat_fat_g": 3.1,
    "sodium_mg": 150.0,
    "sugar_g": 25.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "12-198",
  "state": "Unspecified",
  "subcategory": "BP",
  "tags": [
    "bp",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
