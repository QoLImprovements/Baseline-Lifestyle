/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 samples including Smarties and M & M's",
  "id": "cofid-current-17-096",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Smartie-type sweets",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 73.9,
    "energy_kcal": 456.0,
    "fat_g": 17.5,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 1.5,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 160.0,
    "potassium_mg": 280.0,
    "protein_g": 5.4,
    "salt_g": 0.145,
    "sat_fat_g": 10.4,
    "sodium_mg": 58.0,
    "sugar_g": 70.8,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-096",
  "state": "Unspecified",
  "subcategory": "SEA",
  "tags": [
    "sea",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
