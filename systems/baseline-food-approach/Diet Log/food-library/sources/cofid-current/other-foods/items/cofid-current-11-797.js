/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including rich tea, Morning Coffee",
  "id": "cofid-current-11-797",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, semi-sweet",
  "nutritionPerBasis": {
    "calcium_mg": 157.0,
    "carbs_g": 75.4,
    "energy_kcal": 444.0,
    "fat_g": 15.1,
    "fibre_g": 2.7,
    "folate_ug": 12.0,
    "iron_mg": 2.03,
    "magnesium_mg": 23.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 99.0,
    "potassium_mg": 168.0,
    "protein_g": 6.4,
    "salt_g": 0.895,
    "sat_fat_g": 5.08,
    "sodium_mg": 358.0,
    "sugar_g": 20.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.85,
    "vitamin_k_ug": 1.71
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-797",
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
