/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "cookie-round-1-3-4-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172737",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "cookie-round-1-3-4-dia",
      "kind": "unit",
      "label": "cookie, round (1-3/4\" dia)"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "cookie-oval-3-1-8-x-1-1-4-x-3-8",
      "kind": "unit",
      "label": "cookie, oval (3-1/8\" x 1-1/4\" x 3/8\")"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, vanilla sandwich with creme filling",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 72.1,
    "energy_kcal": 2020.0,
    "fat_g": 20.0,
    "fibre_g": 1.5,
    "folate_ug": 50.0,
    "iron_mg": 2.21,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 91.0,
    "protein_g": 4.5,
    "salt_g": 0.97,
    "sat_fat_g": 2.98,
    "sodium_mg": 388.0,
    "sugar_g": 39.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.6,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172737",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
