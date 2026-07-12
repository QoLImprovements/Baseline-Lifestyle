/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "3-links-1-nlea-serving",
  "description": "Sausages and Luncheon Meats",
  "id": "usda-sr-legacy-167698",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "3-links-1-nlea-serving",
      "kind": "unit",
      "label": "3 links 1 NLEA serving"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "2-links-1-nlea-serving",
      "kind": "unit",
      "label": "2 links 1 NLEA serving"
    }
  ],
  "name": "Pork sausage rice links, brown and serve, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 2.36,
    "energy_kcal": 1700.0,
    "fat_g": 37.6,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.12,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 212.0,
    "protein_g": 13.7,
    "salt_g": 1.7225,
    "sat_fat_g": 12.8,
    "sodium_mg": 689.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167698",
  "state": "Cooked",
  "subcategory": "Sausages and Luncheon Meats",
  "tags": [
    "cooked",
    "meat-and-poultry",
    "sausages-and-luncheon-meats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
