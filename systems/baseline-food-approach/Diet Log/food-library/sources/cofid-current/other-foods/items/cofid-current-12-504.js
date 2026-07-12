/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, 8 products, including I Can't Believe It's Not Butter, Utterly Butterly, and own brands",
  "id": "cofid-current-12-504",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fat spread, reduced fat (41-62%), not polyunsaturated",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 1.3,
    "energy_kcal": 552.0,
    "fat_g": 60.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.03,
    "magnesium_mg": 2.0,
    "omega3_g": 3.18,
    "phosphorus_mg": 12.0,
    "potassium_mg": 43.0,
    "protein_g": 0.4,
    "salt_g": 1.7225,
    "sat_fat_g": 15.61,
    "sodium_mg": 689.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 12.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-504",
  "state": "Unspecified",
  "subcategory": "OA",
  "tags": [
    "oa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
