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
  "id": "usda-sr-legacy-174466",
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
      "gramsPerUnit": 11.0,
      "key": "unit-yield-from-1-lb-ready-to-cook-capon",
      "kind": "unit",
      "label": "unit (yield from 1 lb ready-to cook capon)"
    }
  ],
  "name": "Chicken, capons, giblets, cooked, simmered",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.76,
    "energy_kcal": 686.0,
    "fat_g": 5.4,
    "fibre_g": 0.0,
    "folate_ug": 414.0,
    "iron_mg": 6.8,
    "magnesium_mg": 20.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 235.0,
    "potassium_mg": 153.0,
    "protein_g": 26.4,
    "salt_g": 0.1375,
    "sat_fat_g": 1.77,
    "sodium_mg": 55.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3980.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174466",
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
