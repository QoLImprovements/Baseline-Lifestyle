/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-615",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kebabs, pork and pineapple, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 5.9,
    "energy_kcal": 170.0,
    "fat_g": 9.9,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.01,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 165.0,
    "potassium_mg": 403.0,
    "protein_g": 14.4,
    "salt_g": 0.195,
    "sat_fat_g": 2.44,
    "sodium_mg": 78.0,
    "sugar_g": 6.1,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-615",
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
