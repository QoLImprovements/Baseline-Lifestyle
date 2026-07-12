/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cracker",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174980",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 11.0,
      "key": "cracker",
      "kind": "unit",
      "label": "cracker"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    }
  ],
  "name": "Crackers, milk",
  "nutritionPerBasis": {
    "calcium_mg": 172.0,
    "carbs_g": 71.7,
    "energy_kcal": 1860.0,
    "fat_g": 13.8,
    "fibre_g": 3.4,
    "folate_ug": 90.0,
    "iron_mg": 3.58,
    "magnesium_mg": 22.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 303.0,
    "potassium_mg": 114.0,
    "protein_g": 7.6,
    "salt_g": 1.7175,
    "sat_fat_g": 2.91,
    "sodium_mg": 687.0,
    "sugar_g": 10.3,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174980",
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
