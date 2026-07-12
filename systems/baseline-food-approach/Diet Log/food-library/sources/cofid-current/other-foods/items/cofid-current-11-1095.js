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
  "id": "cofid-current-11-1095",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Muffins, bran, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 44.5,
    "energy_kcal": 263.0,
    "fat_g": 7.0,
    "fibre_g": 9.2,
    "folate_ug": 14.0,
    "iron_mg": 2.46,
    "magnesium_mg": 88.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 356.0,
    "potassium_mg": 378.0,
    "protein_g": 8.2,
    "salt_g": 0.8775,
    "sat_fat_g": 3.5,
    "sodium_mg": 351.0,
    "sugar_g": 17.3,
    "vitamin_a_ug": 72.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 2.6
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-1095",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
