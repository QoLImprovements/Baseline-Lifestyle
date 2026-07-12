/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "packet-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174637",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "packet-1-nlea-serving",
      "kind": "unit",
      "label": "packet (1 NLEA serving)"
    }
  ],
  "name": "Cereals, QUAKER, Instant Oatmeal, DINOSAUR EGGS, Brown Sugar, dry",
  "nutritionPerBasis": {
    "calcium_mg": 220.0,
    "carbs_g": 73.7,
    "energy_kcal": 1610.0,
    "fat_g": 7.59,
    "fibre_g": 6.4,
    "folate_ug": 176.0,
    "iron_mg": 7.91,
    "magnesium_mg": 89.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 302.0,
    "potassium_mg": 250.0,
    "protein_g": 8.69,
    "salt_g": 1.25,
    "sat_fat_g": 2.42,
    "sodium_mg": 500.0,
    "sugar_g": 28.9,
    "vitamin_a_ug": 2200.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174637",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
