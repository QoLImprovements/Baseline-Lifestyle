/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples including chicken, tomato and mushroom casserole and chicken creole, chilled/frozen",
  "id": "cofid-old-19-193",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken in sauce with vegetables, reheated",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 4.5,
    "energy_kcal": 116.0,
    "fat_g": 5.1,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.7,
    "magnesium_mg": 18.0,
    "omega3_g": 0.17,
    "phosphorus_mg": 120.0,
    "potassium_mg": 340.0,
    "protein_g": 13.3,
    "salt_g": 0.8,
    "sat_fat_g": 0.0,
    "sodium_mg": 320.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-193",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
