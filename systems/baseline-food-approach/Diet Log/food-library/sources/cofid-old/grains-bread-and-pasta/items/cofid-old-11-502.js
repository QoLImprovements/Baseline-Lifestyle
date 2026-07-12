/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Manufacturer's data (Kelloggs)",
  "id": "cofid-old-11-502",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Breakfast cereal, Start",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 85.2,
    "energy_kcal": 369.0,
    "fat_g": 2.0,
    "fibre_g": 6.0,
    "folate_ug": 167.0,
    "iron_mg": 11.7,
    "magnesium_mg": 70.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 300.0,
    "protein_g": 7.9,
    "salt_g": 1.25,
    "sat_fat_g": 0.3,
    "sodium_mg": 500.0,
    "sugar_g": 31.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 50.0,
    "vitamin_e_mg": 8.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-502",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
