/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "2-tbsp",
  "description": "Sweets",
  "id": "usda-sr-legacy-170677",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    }
  ],
  "name": "Syrups, chocolate, HERSHEY'S Sugar free, Genuine Chocolate Flavored, Lite Syrup",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 14.2,
    "energy_kcal": 43.0,
    "fat_g": 2.03,
    "fibre_g": 2.9,
    "folate_ug": 5.0,
    "iron_mg": 2.06,
    "magnesium_mg": 74.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 388.0,
    "protein_g": 2.87,
    "salt_g": 0.8575,
    "sat_fat_g": 0.746,
    "sodium_mg": 343.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170677",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
