/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cubic-inch-boneless",
  "description": "Pork Products",
  "id": "usda-sr-legacy-168110",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "cubic-inch-boneless",
      "kind": "unit",
      "label": "cubic inch, boneless"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz-boneless",
      "kind": "unit",
      "label": "3 oz, boneless"
    }
  ],
  "name": "Pork, cured, ham, low sodium, lean and fat, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.3,
    "energy_kcal": 720.0,
    "fat_g": 8.3,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.37,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 265.0,
    "potassium_mg": 386.0,
    "protein_g": 22.3,
    "salt_g": 2.4225,
    "sat_fat_g": 2.78,
    "sodium_mg": 969.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168110",
  "state": "Cooked",
  "subcategory": "Pork Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "pork-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
