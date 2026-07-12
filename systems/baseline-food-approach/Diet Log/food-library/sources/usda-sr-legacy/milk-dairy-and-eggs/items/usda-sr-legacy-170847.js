/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170847",
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
    }
  ],
  "name": "Cheese, mozzarella, part skim milk",
  "nutritionPerBasis": {
    "calcium_mg": 782.0,
    "carbs_g": 2.77,
    "energy_kcal": 254.0,
    "fat_g": 15.9,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.22,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 463.0,
    "potassium_mg": 84.0,
    "protein_g": 24.3,
    "salt_g": 1.5475,
    "sat_fat_g": 10.1,
    "sodium_mg": 619.0,
    "sugar_g": 1.13,
    "vitamin_a_ug": 127.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170847",
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
