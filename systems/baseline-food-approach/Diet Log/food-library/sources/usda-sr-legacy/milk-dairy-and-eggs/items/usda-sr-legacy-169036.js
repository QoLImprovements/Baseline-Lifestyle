/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-varied-from-8-to-10-ravioli-per-serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169036",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 365.0,
      "key": "serving-varied-from-8-to-10-ravioli-per-serving",
      "kind": "unit",
      "label": "serving varied from 8 to 10 ravioli per serving"
    }
  ],
  "name": "CARRABBA'S ITALIAN GRILL, cheese ravioli with marinara sauce",
  "nutritionPerBasis": {
    "calcium_mg": 135.0,
    "carbs_g": 17.6,
    "energy_kcal": 654.0,
    "fat_g": 6.0,
    "fibre_g": 1.4,
    "folate_ug": 11.0,
    "iron_mg": 0.52,
    "magnesium_mg": 21.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 126.0,
    "potassium_mg": 195.0,
    "protein_g": 7.96,
    "salt_g": 0.9275,
    "sat_fat_g": 2.82,
    "sodium_mg": 371.0,
    "sugar_g": 4.15,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169036",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "milk-dairy-and-eggs",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
