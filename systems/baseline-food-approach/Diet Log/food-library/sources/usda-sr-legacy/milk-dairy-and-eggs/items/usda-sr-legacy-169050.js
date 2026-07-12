/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cubic-inch",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-169050",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    }
  ],
  "name": "Cheese, muenster, low fat",
  "nutritionPerBasis": {
    "calcium_mg": 529.0,
    "carbs_g": 3.5,
    "energy_kcal": 271.0,
    "fat_g": 17.6,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.41,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 468.0,
    "potassium_mg": 134.0,
    "protein_g": 24.7,
    "salt_g": 1.5,
    "sat_fat_g": 11.0,
    "sodium_mg": 600.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 175.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169050",
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
