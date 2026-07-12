/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "2-tsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170898",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "2-tsp",
      "kind": "unit",
      "label": "2 tsp"
    }
  ],
  "name": "Cheese, mexican, queso cotija",
  "nutritionPerBasis": {
    "calcium_mg": 800.0,
    "carbs_g": 3.97,
    "energy_kcal": 366.0,
    "fat_g": 30.0,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.0,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 729.0,
    "potassium_mg": 125.0,
    "protein_g": 20.0,
    "salt_g": 3.5,
    "sat_fat_g": 17.5,
    "sodium_mg": 1400.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 229.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170898",
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
