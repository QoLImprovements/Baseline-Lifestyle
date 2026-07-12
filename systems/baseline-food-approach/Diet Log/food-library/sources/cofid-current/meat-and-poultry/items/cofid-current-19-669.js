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
  "id": "cofid-current-19-669",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pork, sweet and sour, made with sweet and sour cook in sauce",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 11.4,
    "energy_kcal": 148.0,
    "fat_g": 4.9,
    "fibre_g": 0.4,
    "folate_ug": 3.0,
    "iron_mg": 0.53,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 139.0,
    "potassium_mg": 294.0,
    "protein_g": 15.3,
    "salt_g": 0.4125,
    "sat_fat_g": 1.11,
    "sodium_mg": 165.0,
    "sugar_g": 10.0,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-669",
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
