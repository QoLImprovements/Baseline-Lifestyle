/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Label data and calculations",
  "id": "cofid-current-11-947",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, seeded",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 43.8,
    "energy_kcal": 270.0,
    "fat_g": 7.4,
    "fibre_g": 6.2,
    "folate_ug": 0.0,
    "iron_mg": 2.3,
    "magnesium_mg": 80.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 226.0,
    "protein_g": 9.9,
    "salt_g": 0.9,
    "sat_fat_g": 1.0,
    "sodium_mg": 360.0,
    "sugar_g": 3.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-947",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
