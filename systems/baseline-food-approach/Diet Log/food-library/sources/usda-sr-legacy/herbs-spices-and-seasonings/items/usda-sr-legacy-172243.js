/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "2-tsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-172243",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.7,
      "key": "2-tsp",
      "kind": "unit",
      "label": "2 tsp"
    }
  ],
  "name": "Seasoning mix, dry, taco, original",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 58.0,
    "energy_kcal": 322.0,
    "fat_g": 0.0,
    "fibre_g": 13.3,
    "folate_ug": 0.0,
    "iron_mg": 7.2,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 1000.0,
    "protein_g": 4.5,
    "salt_g": 18.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 7200.0,
    "sugar_g": 10.8,
    "vitamin_a_ug": 3740.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172243",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "herbs-spices-and-seasonings",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
