/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-879",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Paprika",
  "nutritionPerBasis": {
    "calcium_mg": 229.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 12.9,
    "fibre_g": 34.9,
    "folate_ug": 49.0,
    "iron_mg": 21.14,
    "magnesium_mg": 178.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 314.0,
    "potassium_mg": 2280.0,
    "protein_g": 14.1,
    "salt_g": 0.17,
    "sat_fat_g": 2.14,
    "sodium_mg": 68.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 4926.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-879",
  "state": "Unspecified",
  "subcategory": "H",
  "tags": [
    "h",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
