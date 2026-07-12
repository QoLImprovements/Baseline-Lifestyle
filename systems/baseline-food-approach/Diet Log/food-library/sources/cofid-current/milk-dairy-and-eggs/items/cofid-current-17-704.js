/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Label and data calculated",
  "id": "cofid-current-17-704",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salad cream, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 15.5,
    "energy_kcal": 157.0,
    "fat_g": 10.6,
    "fibre_g": 0.5,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.17,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 1.0,
    "salt_g": 1.325,
    "sat_fat_g": 1.57,
    "sodium_mg": 530.0,
    "sugar_g": 9.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-704",
  "state": "Unspecified",
  "subcategory": "WCG",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "wcg"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
