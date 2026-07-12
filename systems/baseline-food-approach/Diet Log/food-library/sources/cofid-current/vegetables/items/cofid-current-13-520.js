/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "22 samples, autumn and winter, UK grown and imported, including shredded, Iceberg, Romaine and Little Gem",
  "id": "cofid-current-13-520",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lettuce, average, raw",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 1.4,
    "energy_kcal": 11.0,
    "fat_g": 0.1,
    "fibre_g": 1.5,
    "folate_ug": 60.0,
    "iron_mg": 0.13,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 222.0,
    "protein_g": 1.2,
    "salt_g": 0.0225,
    "sat_fat_g": 0.03,
    "sodium_mg": 9.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 129.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-520",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
