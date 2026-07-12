/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-11-1100",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Oatcakes, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 61.4,
    "energy_kcal": 411.0,
    "fat_g": 15.9,
    "fibre_g": 6.8,
    "folate_ug": 28.0,
    "iron_mg": 3.16,
    "magnesium_mg": 99.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 338.0,
    "potassium_mg": 326.0,
    "protein_g": 9.5,
    "salt_g": 0.4375,
    "sat_fat_g": 6.76,
    "sodium_mg": 175.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 115.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 0.8
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1100",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
