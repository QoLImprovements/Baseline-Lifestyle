/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "g",
  "description": "4 samples and calculation from dried",
  "id": "cofid-current-13-891",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Oregano, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 323.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 0.9,
    "fibre_g": 8.6,
    "folate_ug": 48.0,
    "iron_mg": 7.43,
    "magnesium_mg": 55.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 255.0,
    "protein_g": 1.8,
    "salt_g": 0.0125,
    "sat_fat_g": 0.23,
    "sodium_mg": 5.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 45.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-891",
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
