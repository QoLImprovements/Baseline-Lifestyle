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
  "id": "usda-sr-legacy-172211",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    }
  ],
  "name": "KRAFT BREAKSTONE'S FREE Fat Free Sour Cream",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 15.1,
    "energy_kcal": 381.0,
    "fat_g": 1.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.05,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 219.0,
    "protein_g": 4.7,
    "salt_g": 0.18,
    "sat_fat_g": 0.8,
    "sodium_mg": 72.0,
    "sugar_g": 7.2,
    "vitamin_a_ug": 679.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172211",
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
