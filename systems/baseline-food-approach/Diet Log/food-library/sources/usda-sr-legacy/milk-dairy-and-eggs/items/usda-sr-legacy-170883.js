/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container-10-6-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170883",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "container-10-6-oz",
      "kind": "unit",
      "label": "container (10.6 oz)"
    },
    {
      "gramsPerUnit": 28.4,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Milk shakes, thick chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 132.0,
    "carbs_g": 21.2,
    "energy_kcal": 496.0,
    "fat_g": 2.7,
    "fibre_g": 0.3,
    "folate_ug": 5.0,
    "iron_mg": 0.31,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 126.0,
    "potassium_mg": 224.0,
    "protein_g": 3.05,
    "salt_g": 0.2775,
    "sat_fat_g": 1.68,
    "sodium_mg": 111.0,
    "sugar_g": 20.8,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170883",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
