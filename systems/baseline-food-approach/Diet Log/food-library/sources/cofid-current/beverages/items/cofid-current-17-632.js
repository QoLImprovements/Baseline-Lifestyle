/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "9 samples as consumed",
  "id": "cofid-current-17-632",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Coffee, cappuccino, latte",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 3.2,
    "energy_kcal": 27.0,
    "fat_g": 0.8,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.06,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 129.0,
    "protein_g": 2.0,
    "salt_g": 0.0625,
    "sat_fat_g": 0.52,
    "sodium_mg": 25.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-632",
  "state": "Unspecified",
  "subcategory": "P",
  "tags": [
    "beverages",
    "p",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
