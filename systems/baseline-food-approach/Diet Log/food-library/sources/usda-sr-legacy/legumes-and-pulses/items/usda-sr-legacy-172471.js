/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "tbsp",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172471",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Peanut butter with omega-3, creamy",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 17.0,
    "energy_kcal": 2540.0,
    "fat_g": 54.2,
    "fibre_g": 6.1,
    "folate_ug": 0.0,
    "iron_mg": 1.67,
    "magnesium_mg": 191.0,
    "omega3_g": 3.094,
    "phosphorus_mg": 426.0,
    "potassium_mg": 780.0,
    "protein_g": 24.5,
    "salt_g": 0.89,
    "sat_fat_g": 9.69,
    "sodium_mg": 356.0,
    "sugar_g": 3.11,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 10.3,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172471",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
