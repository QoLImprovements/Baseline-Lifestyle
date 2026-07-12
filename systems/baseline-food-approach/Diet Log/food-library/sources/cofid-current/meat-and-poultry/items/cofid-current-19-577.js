/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Used for duck a l'orange recipe calculations",
  "id": "cofid-current-19-577",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sauce, duck a l'orange",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 7.1,
    "energy_kcal": 66.0,
    "fat_g": 3.7,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.15,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 40.0,
    "protein_g": 0.5,
    "salt_g": 0.9975,
    "sat_fat_g": 2.1,
    "sodium_mg": 399.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.36
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-577",
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
