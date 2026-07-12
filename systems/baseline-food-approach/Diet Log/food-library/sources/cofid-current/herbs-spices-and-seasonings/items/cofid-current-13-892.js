/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "g",
  "description": "7 samples and calculation from dried",
  "id": "cofid-current-13-892",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rosemary, fresh",
  "nutritionPerBasis": {
    "calcium_mg": 370.0,
    "carbs_g": 13.5,
    "energy_kcal": 99.0,
    "fat_g": 4.4,
    "fibre_g": 12.4,
    "folate_ug": 89.0,
    "iron_mg": 8.5,
    "magnesium_mg": 64.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 280.0,
    "protein_g": 1.4,
    "salt_g": 0.0375,
    "sat_fat_g": 2.15,
    "sodium_mg": 15.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-892",
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
