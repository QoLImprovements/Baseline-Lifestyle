/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-shredded",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-169051",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    }
  ],
  "name": "Cheese, mozzarella, nonfat",
  "nutritionPerBasis": {
    "calcium_mg": 961.0,
    "carbs_g": 3.5,
    "energy_kcal": 589.0,
    "fat_g": 0.0,
    "fibre_g": 1.8,
    "folate_ug": 10.0,
    "iron_mg": 0.31,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 656.0,
    "potassium_mg": 106.0,
    "protein_g": 31.7,
    "salt_g": 1.8575,
    "sat_fat_g": 0.0,
    "sodium_mg": 743.0,
    "sugar_g": 1.48,
    "vitamin_a_ug": 127.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169051",
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
