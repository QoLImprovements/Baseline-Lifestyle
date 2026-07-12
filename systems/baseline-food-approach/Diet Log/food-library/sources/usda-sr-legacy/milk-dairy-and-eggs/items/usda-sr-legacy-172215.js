/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice-1-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172215",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice-1-oz",
      "kind": "unit",
      "label": "slice (1 oz)"
    },
    {
      "gramsPerUnit": 14.3,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-diced",
      "kind": "unit",
      "label": "cup, diced"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "package-6-oz",
      "kind": "unit",
      "label": "package (6 oz)"
    }
  ],
  "name": "Cheese, provolone, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 756.0,
    "carbs_g": 3.5,
    "energy_kcal": 274.0,
    "fat_g": 17.6,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.52,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 496.0,
    "potassium_mg": 138.0,
    "protein_g": 24.7,
    "salt_g": 1.5375,
    "sat_fat_g": 11.3,
    "sodium_mg": 615.0,
    "sugar_g": 0.55,
    "vitamin_a_ug": 141.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172215",
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
