/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "unit",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172228",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "unit",
      "kind": "unit",
      "label": "unit"
    }
  ],
  "name": "Ice cream cone, chocolate covered, with nuts, flavors other than chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 34.4,
    "energy_kcal": 354.0,
    "fat_g": 21.9,
    "fibre_g": 1.0,
    "folate_ug": 24.0,
    "iron_mg": 0.0,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 222.0,
    "protein_g": 5.21,
    "salt_g": 0.235,
    "sat_fat_g": 11.5,
    "sodium_mg": 94.0,
    "sugar_g": 25.0,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172228",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
