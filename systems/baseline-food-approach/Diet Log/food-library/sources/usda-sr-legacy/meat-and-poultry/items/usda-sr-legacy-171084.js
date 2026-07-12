/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-oz",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-171084",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "giblets",
      "kind": "unit",
      "label": "giblets"
    }
  ],
  "name": "Turkey, whole, giblets, cooked, simmered",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 0.0,
    "energy_kcal": 173.0,
    "fat_g": 6.61,
    "fibre_g": 0.0,
    "folate_ug": 303.0,
    "iron_mg": 3.39,
    "magnesium_mg": 25.0,
    "omega3_g": 0.085,
    "phosphorus_mg": 249.0,
    "potassium_mg": 177.0,
    "protein_g": 26.4,
    "salt_g": 0.2925,
    "sat_fat_g": 1.72,
    "sodium_mg": 117.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4620.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171084",
  "state": "Cooked",
  "subcategory": "Poultry Products",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "poultry-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
