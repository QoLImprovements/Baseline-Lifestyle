/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container-6-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172220",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "container-6-oz",
      "kind": "unit",
      "label": "container (6 oz)"
    }
  ],
  "name": "Yogurt, vanilla or lemon flavor, nonfat milk, sweetened with low-calorie sweetener, fortified with vitamin D",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 7.5,
    "energy_kcal": 180.0,
    "fat_g": 0.18,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.12,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 177.0,
    "protein_g": 3.86,
    "salt_g": 0.1475,
    "sat_fat_g": 0.116,
    "sodium_mg": 59.0,
    "sugar_g": 7.5,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172220",
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
