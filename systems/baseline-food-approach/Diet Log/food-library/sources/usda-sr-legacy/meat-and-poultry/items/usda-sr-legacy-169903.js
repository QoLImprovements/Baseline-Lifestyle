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
  "id": "usda-sr-legacy-169903",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup-chopped-or-diced",
      "kind": "unit",
      "label": "cup, chopped or diced"
    }
  ],
  "name": "Pheasant, cooked, total edible",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.0,
    "energy_kcal": 239.0,
    "fat_g": 12.1,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.43,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 242.0,
    "potassium_mg": 271.0,
    "protein_g": 32.4,
    "salt_g": 0.1075,
    "sat_fat_g": 3.91,
    "sodium_mg": 43.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169903",
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
