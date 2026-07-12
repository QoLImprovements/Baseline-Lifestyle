/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "14 samples, 10 brands, including bio varieties, flavours include strawberry, raspberry, black cherry and rhubarb",
  "id": "cofid-current-12-532",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt, virtually fat free/diet, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 10.1,
    "energy_kcal": 59.0,
    "fat_g": 0.2,
    "fibre_g": 0.4,
    "folate_ug": 8.0,
    "iron_mg": 0.1,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 204.0,
    "protein_g": 4.8,
    "salt_g": 0.155,
    "sat_fat_g": 0.1,
    "sodium_mg": 62.0,
    "sugar_g": 9.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-532",
  "state": "Unspecified",
  "subcategory": "BN",
  "tags": [
    "bn",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
