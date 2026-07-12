/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cookie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172736",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.1,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "3-cookies",
      "kind": "unit",
      "label": "3 cookies"
    }
  ],
  "name": "Cookies, sugar wafers with creme filling, regular",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 70.6,
    "energy_kcal": 2100.0,
    "fat_g": 23.2,
    "fibre_g": 1.6,
    "folate_ug": 77.0,
    "iron_mg": 3.73,
    "magnesium_mg": 16.0,
    "omega3_g": 0.092,
    "phosphorus_mg": 72.0,
    "potassium_mg": 117.0,
    "protein_g": 3.84,
    "salt_g": 0.2575,
    "sat_fat_g": 11.9,
    "sodium_mg": 103.0,
    "sugar_g": 43.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.5,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172736",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
