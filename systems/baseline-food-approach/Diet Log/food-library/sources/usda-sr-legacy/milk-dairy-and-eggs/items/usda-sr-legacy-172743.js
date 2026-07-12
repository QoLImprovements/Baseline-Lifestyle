/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-5-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172743",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "cracker-sandwich",
      "kind": "unit",
      "label": "cracker, sandwich"
    }
  ],
  "name": "Crackers, rye, sandwich-type with cheese filling",
  "nutritionPerBasis": {
    "calcium_mg": 222.0,
    "carbs_g": 60.8,
    "energy_kcal": 2010.0,
    "fat_g": 22.3,
    "fibre_g": 3.6,
    "folate_ug": 81.0,
    "iron_mg": 2.45,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 339.0,
    "potassium_mg": 342.0,
    "protein_g": 9.2,
    "salt_g": 2.6,
    "sat_fat_g": 5.99,
    "sodium_mg": 1040.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172743",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
