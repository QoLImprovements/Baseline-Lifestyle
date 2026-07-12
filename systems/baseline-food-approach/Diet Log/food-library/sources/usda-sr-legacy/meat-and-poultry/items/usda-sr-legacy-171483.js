/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171483",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "gizzard-cooked",
      "kind": "unit",
      "label": "gizzard cooked"
    }
  ],
  "name": "Turkey, all classes, gizzard, cooked, simmered",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 0.0,
    "energy_kcal": 155.0,
    "fat_g": 4.64,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 3.68,
    "magnesium_mg": 21.0,
    "omega3_g": 0.046,
    "phosphorus_mg": 187.0,
    "potassium_mg": 193.0,
    "protein_g": 26.4,
    "salt_g": 0.3175,
    "sat_fat_g": 1.06,
    "sodium_mg": 127.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171483",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
