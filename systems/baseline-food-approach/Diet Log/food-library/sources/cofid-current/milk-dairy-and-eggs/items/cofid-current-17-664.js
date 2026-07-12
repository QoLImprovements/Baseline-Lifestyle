/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-664",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread sauce, made with semi-skimmed milk, HOMEMADE",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 15.6,
    "energy_kcal": 97.0,
    "fat_g": 2.5,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.36,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 88.0,
    "potassium_mg": 166.0,
    "protein_g": 4.0,
    "salt_g": 0.2325,
    "sat_fat_g": 1.43,
    "sodium_mg": 93.0,
    "sugar_g": 5.4,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-664",
  "state": "Unspecified",
  "subcategory": "WCD",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "wcd"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
