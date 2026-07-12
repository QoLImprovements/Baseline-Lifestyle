/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup-chopped-or-diced",
  "description": "Poultry Products",
  "id": "usda-sr-legacy-172397",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup-chopped-or-diced",
      "kind": "unit",
      "label": "cup, chopped or diced"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-chicken",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to-cook chicken)"
    }
  ],
  "name": "Chicken, roasting, giblets, cooked, simmered",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.86,
    "energy_kcal": 690.0,
    "fat_g": 5.22,
    "fibre_g": 0.0,
    "folate_ug": 303.0,
    "iron_mg": 6.09,
    "magnesium_mg": 20.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 213.0,
    "potassium_mg": 160.0,
    "protein_g": 26.8,
    "salt_g": 0.15,
    "sat_fat_g": 1.64,
    "sodium_mg": 60.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2440.0,
    "vitamin_c_mg": 6.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172397",
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
