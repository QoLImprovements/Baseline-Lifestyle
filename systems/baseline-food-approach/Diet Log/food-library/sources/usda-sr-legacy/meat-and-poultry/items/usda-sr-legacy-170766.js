/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "pizza",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170766",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 913.0,
      "key": "pizza",
      "kind": "unit",
      "label": "pizza"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "DOMINO'S 14\" Sausage Pizza, Classic Hand-Tossed Crust",
  "nutritionPerBasis": {
    "calcium_mg": 137.0,
    "carbs_g": 31.8,
    "energy_kcal": 273.0,
    "fat_g": 11.2,
    "fibre_g": 2.4,
    "folate_ug": 0.0,
    "iron_mg": 2.36,
    "magnesium_mg": 25.0,
    "omega3_g": 0.208,
    "phosphorus_mg": 196.0,
    "potassium_mg": 183.0,
    "protein_g": 11.1,
    "salt_g": 1.485,
    "sat_fat_g": 4.61,
    "sodium_mg": 594.0,
    "sugar_g": 3.92,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170766",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
