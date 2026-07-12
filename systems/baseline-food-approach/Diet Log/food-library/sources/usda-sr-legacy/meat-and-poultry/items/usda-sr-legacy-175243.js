/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "cup-cup-rinsed-solids",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-175243",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "cup-cup-rinsed-solids",
      "kind": "unit",
      "label": "cup cup rinsed solids"
    }
  ],
  "name": "Beans, kidney, red, mature seeds, canned, drained solids, rinsed in tap water",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 20.8,
    "energy_kcal": 505.0,
    "fat_g": 0.93,
    "fibre_g": 6.0,
    "folate_ug": 23.0,
    "iron_mg": 1.5,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 250.0,
    "protein_g": 8.12,
    "salt_g": 0.52,
    "sat_fat_g": 0.328,
    "sodium_mg": 208.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175243",
  "state": "Canned",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "canned",
    "legumes-and-legume-products",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
