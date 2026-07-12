/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172801",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "pastry",
      "kind": "unit",
      "label": "pastry"
    }
  ],
  "name": "Toaster pastries, brown-sugar-cinnamon",
  "nutritionPerBasis": {
    "calcium_mg": 293.0,
    "carbs_g": 72.6,
    "energy_kcal": 370.0,
    "fat_g": 7.98,
    "fibre_g": 2.3,
    "folate_ug": 137.0,
    "iron_mg": 5.62,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 105.0,
    "protein_g": 4.06,
    "salt_g": 0.9025,
    "sat_fat_g": 0.0,
    "sodium_mg": 361.0,
    "sugar_g": 27.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.33,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172801",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "herbs-spices-and-seasonings",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
