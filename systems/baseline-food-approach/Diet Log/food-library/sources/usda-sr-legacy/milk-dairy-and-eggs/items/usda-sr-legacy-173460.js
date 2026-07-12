/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "2-scoop",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173460",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "2-scoop",
      "kind": "unit",
      "label": "2 scoop"
    }
  ],
  "name": "Protein supplement, milk based, Muscle Milk Light, powder",
  "nutritionPerBasis": {
    "calcium_mg": 1200.0,
    "carbs_g": 22.0,
    "energy_kcal": 1660.0,
    "fat_g": 12.0,
    "fibre_g": 2.0,
    "folate_ug": 280.0,
    "iron_mg": 12.0,
    "magnesium_mg": 280.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 700.0,
    "potassium_mg": 840.0,
    "protein_g": 50.0,
    "salt_g": 0.625,
    "sat_fat_g": 1.09,
    "sodium_mg": 250.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 1050.0,
    "vitamin_c_mg": 42.0,
    "vitamin_e_mg": 9.45,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173460",
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
