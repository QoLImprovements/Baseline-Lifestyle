/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "2-tbsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172210",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    }
  ],
  "name": "KRAFT BREAKSTONE'S Reduced Fat Sour Cream",
  "nutritionPerBasis": {
    "calcium_mg": 161.0,
    "carbs_g": 6.5,
    "energy_kcal": 636.0,
    "fat_g": 12.0,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.06,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 210.0,
    "protein_g": 4.5,
    "salt_g": 0.1475,
    "sat_fat_g": 7.6,
    "sodium_mg": 59.0,
    "sugar_g": 6.4,
    "vitamin_a_ug": 1050.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172210",
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
