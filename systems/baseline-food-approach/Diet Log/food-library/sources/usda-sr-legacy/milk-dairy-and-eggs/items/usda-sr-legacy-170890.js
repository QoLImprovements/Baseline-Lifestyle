/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170890",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Milk dessert bar, frozen, made from lowfat milk",
  "nutritionPerBasis": {
    "calcium_mg": 184.0,
    "carbs_g": 32.0,
    "energy_kcal": 147.0,
    "fat_g": 1.47,
    "fibre_g": 6.6,
    "folate_ug": 4.0,
    "iron_mg": 0.53,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 316.0,
    "protein_g": 4.41,
    "salt_g": 0.23,
    "sat_fat_g": 0.735,
    "sodium_mg": 92.0,
    "sugar_g": 22.1,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170890",
  "state": "Frozen",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "frozen",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
