/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "large",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172186",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    }
  ],
  "name": "Egg, whole, cooked, poached",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 0.71,
    "energy_kcal": 143.0,
    "fat_g": 9.47,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 1.75,
    "magnesium_mg": 12.0,
    "omega3_g": 0.065,
    "phosphorus_mg": 197.0,
    "potassium_mg": 138.0,
    "protein_g": 12.5,
    "salt_g": 0.7425,
    "sat_fat_g": 3.11,
    "sodium_mg": 297.0,
    "sugar_g": 0.37,
    "vitamin_a_ug": 160.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.04,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172186",
  "state": "Poached",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "poached"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
