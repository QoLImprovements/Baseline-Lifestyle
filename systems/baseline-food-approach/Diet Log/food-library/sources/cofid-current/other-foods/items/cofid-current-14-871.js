/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-14-871",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Brazil nuts, kernel only",
  "nutritionPerBasis": {
    "calcium_mg": 170.0,
    "carbs_g": 3.1,
    "energy_kcal": 683.0,
    "fat_g": 68.2,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 2.5,
    "magnesium_mg": 410.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 590.0,
    "potassium_mg": 660.0,
    "protein_g": 14.3,
    "salt_g": 0.0075,
    "sat_fat_g": 17.41,
    "sodium_mg": 3.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 7.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-871",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
