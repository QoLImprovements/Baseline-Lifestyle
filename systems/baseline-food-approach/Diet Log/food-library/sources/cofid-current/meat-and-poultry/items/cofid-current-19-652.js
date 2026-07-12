/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Calculated from 19-541",
  "id": "cofid-current-19-652",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken wings, marinated, meat and skin, barbecued, weighed with bone",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 2.7,
    "energy_kcal": 179.0,
    "fat_g": 10.8,
    "fibre_g": 0.3,
    "folate_ug": 7.0,
    "iron_mg": 0.9,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 230.0,
    "protein_g": 17.8,
    "salt_g": 0.625,
    "sat_fat_g": 3.0,
    "sodium_mg": 250.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-652",
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
